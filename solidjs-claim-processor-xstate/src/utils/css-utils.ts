export const fixDuplicateStyles = () => {
  if (window?.location?.hostname === "localhost") {
    const nodeList = document?.querySelectorAll("style");
    console.log("CSS STYLE DEDUPE FOR LOCALHOST");
    nodeList.forEach((style) => {
      if (style.hasAttribute("data-vite-dev-id")) return;
      if (style.classList.length > 0) return;

      if (style.hasAttribute("data-sm")) {
        // TODO: is this always the combined page style data name?
        console.debug("Removing style (to avoid dupes in dev):", style);
        style.remove();
      }
    });
  }

  return null;
};
