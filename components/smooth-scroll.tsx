"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === "A" && target.href.includes("#")) {
        const url = new URL(target.href)
        if (url.pathname === window.location.pathname && url.hash) {
          e.preventDefault()
          const element = document.querySelector(url.hash)
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        }
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return null
}
