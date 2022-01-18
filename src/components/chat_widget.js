import { useEffect } from "react";
import { tawkToLoadScripts } from "../utils/tawkchat";

export default function ChatWidget() {
  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();
  useEffect(() => {
    tawkToLoadScripts();
    window.Tawk_API.onLoad = function () {
      console.log("successfully added tawk chat bubble");
    };
  }, []);
  return <></>
}
