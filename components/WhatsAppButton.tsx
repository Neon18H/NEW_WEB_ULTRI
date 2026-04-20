export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[90]">
      <a
        href="https://wa.me/573206090618"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Envía un mensaje a Ultriatech por WhatsApp"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#1DAA52] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-ultri-dark"
      >
        <span className="sr-only">Envía un mensaje a Ultriatech por WhatsApp</span>
        <svg
          aria-hidden="true"
          className="h-7 w-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.88 11.88 0 0 0 12.06 0C5.53 0 .2 5.33.2 11.86c0 2.1.55 4.15 1.59 5.95L0 24l6.36-1.67a11.8 11.8 0 0 0 5.7 1.45h.01c6.53 0 11.86-5.33 11.86-11.86 0-3.17-1.24-6.14-3.41-8.44Zm-8.46 18.3h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.78.99 1.01-3.69-.24-.38a9.86 9.86 0 0 1 1.5-12.54A9.86 9.86 0 0 1 22 11.92c0 5.44-4.43 9.86-9.87 9.86Zm5.41-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.41-1.46-.89-.79-1.5-1.75-1.68-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.66-1.59-.9-2.17-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.08 2.88 1.23 3.08.15.2 2.11 3.22 5.1 4.51.71.3 1.26.47 1.69.6.71.22 1.35.19 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.69.25-1.28.17-1.42-.07-.13-.27-.2-.56-.35Z" />
        </svg>

        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-slate-900/95 px-3 py-1.5 text-xs font-medium text-slate-100 translate-x-1 opacity-0 shadow-md transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
          Envía un mensaje a Ultriatech por WhatsApp
        </span>
      </a>
    </div>
  );
}
