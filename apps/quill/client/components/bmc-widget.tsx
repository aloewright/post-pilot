import { useEffect } from "react";

// Buy Me a Coffee floating widget. Loaded once per session — sessionStorage
// gate means the widget appears on the user's first navigation in a tab and
// stays mounted for that session, then doesn't re-show until a new session.
const STORAGE_KEY = "bmc-widget-shown";

export function BmcWidget() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // sessionStorage unavailable (Safari private mode, etc.) — fall through
      // and load the widget anyway. Worst case it loads on every nav.
    }

    const script = document.createElement("script");
    script.setAttribute("data-name", "BMC-Widget");
    script.setAttribute("data-cfasync", "false");
    script.src =
      "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
    script.setAttribute("data-id", "allosaurus");
    script.setAttribute(
      "data-description",
      "Support me on Buy me a coffee!"
    );
    script.setAttribute("data-message", "Your support saves dinosaurs.");
    script.setAttribute("data-color", "#FF5F5F");
    script.setAttribute("data-position", "Right");
    script.setAttribute("data-x_margin", "18");
    script.setAttribute("data-y_margin", "18");
    document.body.appendChild(script);
  }, []);

  return null;
}
