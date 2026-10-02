import { useEffect, useRef, useState } from 'react'

// Shared by illustrated locations; CSS animation completion replaces a timer.
export function useLocationOpening() {
  const [opening, setOpening] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const continueButton = useRef<HTMLButtonElement>(null)
  const contentTitle = useRef<HTMLHeadingElement>(null)
  const dismiss = () => setOpening(false)

  function revealContent(advance = false) {
    const transferFocus = document.activeElement === continueButton.current
    setOpening(false)
    if (advance || transferFocus) contentTitle.current?.focus({ preventScroll: !advance })
  }

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => { if (preference.matches) revealContent() }
    preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [])

  return { opening, dismiss, continueButton, contentTitle, revealContent }
}
