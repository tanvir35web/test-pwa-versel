import React, { useState, useEffect } from "react";

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      // Prevent the browser's default prompt
      event.preventDefault();
      // Store the event for later use
      setDeferredPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      // Trigger the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        // Clear the deferredPrompt variable
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <button
      onClick={handleInstallClick}
      style={{ display: deferredPrompt ? "block" : "none" }}
    >
      <span className="rounded bg-docBlue-50 p-2 md:p-3 shadow font-bold text-gray-700 text-sm md:text-base">
        {" "}
        Install PWA{" "}
      </span>
    </button>
  );
};

export default InstallPrompt;
