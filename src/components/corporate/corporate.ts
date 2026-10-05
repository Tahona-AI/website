const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

// Progressive enhancement: content remains visible when JavaScript is unavailable.
if (!reducedMotion.matches && "IntersectionObserver" in window) {
  document.documentElement.classList.add("motion-ready");
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.08 },
  );
  document
    .querySelectorAll(".reveal, .international-section")
    .forEach((element) => observer.observe(element));
  reducedMotion.addEventListener("change", (event) => {
    if (event.matches) {
      document.documentElement.classList.remove("motion-ready");
      observer.disconnect();
    }
  });
}

const menuTrigger = document.querySelector<HTMLButtonElement>(
  "[data-menu-trigger]",
);
const servicesMenu = document.querySelector<HTMLElement>("#services-menu");
const mobileTrigger =
  document.querySelector<HTMLButtonElement>(".mobile-toggle");
const mobileMenu = document.querySelector<HTMLElement>("#mobile-nav");

function setMenu(
  trigger: HTMLButtonElement | null,
  menu: HTMLElement | null,
  open: boolean,
) {
  if (!trigger || !menu) return;
  trigger.setAttribute("aria-expanded", String(open));
  menu.hidden = !open;
  if (trigger === mobileTrigger)
    trigger.setAttribute(
      "aria-label",
      (open ? trigger.dataset.closeLabel : trigger.dataset.openLabel) ?? "",
    );
}
menuTrigger?.addEventListener("click", () =>
  setMenu(menuTrigger, servicesMenu, servicesMenu?.hidden ?? false),
);
mobileTrigger?.addEventListener("click", () =>
  setMenu(mobileTrigger, mobileMenu, mobileMenu?.hidden ?? false),
);
document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  if (!event.target.closest(".nav-disclosure"))
    setMenu(menuTrigger, servicesMenu, false);
  if (event.target.closest(".mega-menu a, .mobile-nav a")) {
    setMenu(menuTrigger, servicesMenu, false);
    setMenu(mobileTrigger, mobileMenu, false);
  }
  if (!event.target.closest(".site-header"))
    setMenu(mobileTrigger, mobileMenu, false);
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (mobileTrigger?.getAttribute("aria-expanded") === "true") {
    setMenu(mobileTrigger, mobileMenu, false);
    mobileTrigger.focus();
  }
  if (menuTrigger?.getAttribute("aria-expanded") === "true") {
    setMenu(menuTrigger, servicesMenu, false);
    menuTrigger.focus();
  }
});
document
  .querySelector(".nav-disclosure")
  ?.addEventListener("focusout", (event) => {
    if (
      event instanceof FocusEvent &&
      event.currentTarget instanceof Element &&
      event.relatedTarget instanceof Node &&
      !event.currentTarget.contains(event.relatedTarget)
    ) {
      setMenu(menuTrigger, servicesMenu, false);
    }
  });
window
  .matchMedia("(min-width: 901px)")
  .addEventListener("change", () => setMenu(mobileTrigger, mobileMenu, false));

const industryTabs = Array.from(
  document.querySelectorAll<HTMLButtonElement>("[data-industry-tab]"),
);
function selectIndustry(selected: HTMLButtonElement) {
  for (const tab of industryTabs) {
    const active = tab === selected;
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    const panelId = tab.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;
    if (panel) panel.hidden = !active;
  }
}
industryTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectIndustry(tab));
  tab.addEventListener("keydown", (event) => {
    let next: number | undefined;
    if (event.key === "ArrowRight" || event.key === "ArrowDown")
      next = (index + 1) % industryTabs.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp")
      next = (index - 1 + industryTabs.length) % industryTabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = industryTabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    industryTabs[next].focus();
    selectIndustry(industryTabs[next]);
  });
});

const lastDialogTriggers = new WeakMap<HTMLDialogElement, HTMLElement>();
function openDialog(dialog: HTMLDialogElement, trigger: HTMLElement) {
  lastDialogTriggers.set(dialog, trigger);
  document.body.classList.add("modal-open");
  dialog.showModal();
}
document
  .querySelectorAll<HTMLButtonElement>("[data-dialog]")
  .forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const dialog = document.getElementById(trigger.dataset.dialog ?? "");
      if (dialog instanceof HTMLDialogElement) openDialog(dialog, trigger);
    });
  });
document.querySelectorAll<HTMLDialogElement>("dialog").forEach((dialog) => {
  dialog
    .querySelectorAll(".dialog-close, .dialog-close-action, [data-dialog-link]")
    .forEach((control) => {
      control.addEventListener("click", () => dialog.close());
    });
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    lastDialogTriggers.get(dialog)?.focus({ preventScroll: true });
    // Personal input is never persisted, sent to a webhook, or retained in the summary.
    if (dialog.id === "solicitud")
      document.querySelector("#request-summary")?.replaceChildren();
  });
});

const form = document.querySelector<HTMLFormElement>(".contact-form");
const reviewButton = form?.querySelector<HTMLButtonElement>(
  "button[type=submit]",
);
if (reviewButton) reviewButton.disabled = false;
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const summary = document.querySelector("#request-summary");
  const dialog = document.getElementById("solicitud");
  if (!summary || !(dialog instanceof HTMLDialogElement)) return;
  const data = new FormData(form);
  summary.replaceChildren();
  const labels: Array<[string, string]> = JSON.parse(
    form.dataset.formLabels ?? "[]",
  );
  for (const [name, label] of labels) {
    const term = document.createElement("dt");
    const description = document.createElement("dd");
    term.textContent = label;
    description.textContent = String(data.get(name) ?? "").trim();
    summary.append(term, description);
  }
  const submit = form.querySelector<HTMLButtonElement>("button[type=submit]");
  if (submit) openDialog(dialog, submit);
  const status = form.querySelector(".form-status");
  if (status) status.textContent = form.dataset.statusMessage ?? "";
});

// Keep the exact reading position across the three static language routes.
const languagePicker =
  document.querySelector<HTMLDetailsElement>(".language-picker");
document
  .querySelectorAll<HTMLAnchorElement>("[data-language-switch]")
  .forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const destination = new URL(link.href);
      if (destination.pathname === window.location.pathname) {
        event.preventDefault();
        if (languagePicker) languagePicker.open = false;
        languagePicker?.querySelector<HTMLElement>("summary")?.focus({ preventScroll: true });
        return;
      }
      try {
        sessionStorage.setItem("tahona-language-scroll", JSON.stringify({
          path: destination.pathname,
          x: window.scrollX,
          y: window.scrollY,
        }));
      } catch {
        // Language links remain usable if browser storage is unavailable.
      }
    });
  });
document.addEventListener("click", (event) => {
  if (
    event.target instanceof Element &&
    !event.target.closest(".language-picker") &&
    languagePicker
  )
    languagePicker.open = false;
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && languagePicker?.open) {
    languagePicker.open = false;
    languagePicker.querySelector<HTMLElement>("summary")?.focus();
  }
});
languagePicker?.addEventListener("focusout", (event) => {
  if (
    event.relatedTarget instanceof Node &&
    !languagePicker.contains(event.relatedTarget)
  )
    languagePicker.open = false;
});

// Only the landscape changes. The message stays still and remains readable.
const carousel = document.querySelector<HTMLElement>("[data-carousel]");
if (carousel) {
  const slides = Array.from(
    carousel.querySelectorAll<HTMLElement>("[data-slide]"),
  );
  const indicators = Array.from(
    carousel.querySelectorAll<HTMLButtonElement>("[data-slide-button]"),
  );
  const pauseButton = carousel.querySelector<HTMLButtonElement>(
    "[data-carousel-pause]",
  );
  const nextButton = carousel.querySelector<HTMLButtonElement>(
    "[data-carousel-next]",
  );
  const previousButton = carousel.querySelector<HTMLButtonElement>(
    "[data-carousel-prev]",
  );
  const smallScreen = window.matchMedia("(max-width: 767px)");
  let index = 0;
  let paused = reducedMotion.matches || smallScreen.matches;
  let hovered = false;
  let focused = false;
  let explicitPlayback = false;
  let visible = true;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let startedAt: number | undefined;
  let remainingMs = 9000;
  let request = 0;

  function prepareImage(slideIndex: number) {
    const image = slides[slideIndex]?.querySelector("img");
    if (!(image instanceof HTMLImageElement)) return undefined;
    if (image.dataset.imageSrc) {
      image.srcset = image.dataset.imageSrcset ?? "";
      image.src = image.dataset.imageSrc;
      delete image.dataset.imageSrc;
      delete image.dataset.imageSrcset;
    }
    return image;
  }

  function updatePlayback() {
    clearTimeout(timer);
    if (startedAt !== undefined) {
      remainingMs = Math.max(0, remainingMs - (performance.now() - startedAt));
      startedAt = undefined;
    }
    const playing =
      !paused &&
      (explicitPlayback || (!hovered && !focused)) &&
      visible &&
      !document.hidden &&
      !reducedMotion.matches;
    carousel!.dataset.playing = String(playing);
    carousel!.dataset.activeSlide = String(index + 1);
    if (pauseButton) {
      pauseButton.setAttribute(
        "aria-label",
        (paused ? carousel!.dataset.playLabel : carousel!.dataset.pauseLabel) ??
          "",
      );
      pauseButton.setAttribute("aria-pressed", String(paused));
      pauseButton.disabled = reducedMotion.matches;
      const symbol = pauseButton.querySelector("[data-pause-symbol]");
      if (symbol) symbol.textContent = paused ? "▶" : "Ⅱ";
    }
    if (playing && slides.length > 1) {
      // Fetch only the next landscape, rather than all eight at page load.
      void prepareImage((index + 1) % slides.length)
        ?.decode()
        .catch(() => undefined);
      startedAt = performance.now();
      timer = setTimeout(
        () => void showSlide((index + 1) % slides.length, false),
        remainingMs,
      );
    }
  }

  async function showSlide(next: number, manual: boolean) {
    if (!slides[next]) return;
    const turn = ++request;
    clearTimeout(timer);
    if (manual) {
      paused = true;
      explicitPlayback = false;
    }
    if (next === index) {
      updatePlayback();
      return;
    }
    const image = prepareImage(next);
    if (image) {
      try {
        await image.decode();
      } catch {
        if (turn !== request) return;
        // Keep the current landscape if a file cannot be decoded; never retry in a loop.
        paused = true;
        explicitPlayback = false;
        updatePlayback();
        return;
      }
    }
    if (turn !== request) return;
    // A pause or visibility change during loading must also stop the pending advance.
    if (!manual && carousel!.dataset.playing !== "true") return;
    index = next;
    startedAt = undefined;
    remainingMs = 9000;
    slides.forEach((slide, i) => {
      if (i === index)
        slide.dataset.motionCycle =
          slide.dataset.motionCycle === "0" ? "1" : "0";
      slide.classList.toggle("is-active", i === index);
      slide.setAttribute("aria-hidden", String(i !== index));
      indicators[i]?.setAttribute("aria-pressed", String(i === index));
    });
    const active = indicators[index];
    const counter = carousel!.querySelector("[data-carousel-index]");
    const name = carousel!.querySelector("[data-carousel-name]");
    const caption = carousel!.querySelector("[data-carousel-caption]");
    const status = carousel!.querySelector("[data-carousel-status]");
    if (counter) counter.textContent = String(index + 1).padStart(2, "0");
    if (name) name.textContent = active?.dataset.slideName ?? "";
    if (caption) caption.textContent = active?.dataset.slideCaption ?? "";
    if (manual && status)
      status.textContent = active?.getAttribute("aria-label") ?? "";
    updatePlayback();
  }

  indicators.forEach((button, i) =>
    button.addEventListener("click", () => void showSlide(i, true)),
  );
  nextButton?.addEventListener(
    "click",
    () => void showSlide((index + 1) % slides.length, true),
  );
  previousButton?.addEventListener(
    "click",
    () => void showSlide((index - 1 + slides.length) % slides.length, true),
  );
  pauseButton?.addEventListener("click", () => {
    paused = !paused;
    // The explicit play action takes precedence over the button's own focus/hover.
    explicitPlayback = !paused;
    updatePlayback();
  });
  carousel.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "mouse") {
      hovered = true;
      explicitPlayback = false;
      updatePlayback();
    }
  });
  carousel.addEventListener("pointerleave", () => {
    hovered = false;
    updatePlayback();
  });
  carousel.addEventListener("focusin", () => {
    focused = true;
    explicitPlayback = false;
    updatePlayback();
  });
  carousel.addEventListener("focusout", (event) => {
    if (
      !(event.relatedTarget instanceof Node) ||
      !carousel.contains(event.relatedTarget)
    ) {
      focused = false;
      updatePlayback();
    }
  });
  document.addEventListener("visibilitychange", updatePlayback);
  reducedMotion.addEventListener("change", () => {
    if (reducedMotion.matches) paused = true;
    updatePlayback();
  });
  smallScreen.addEventListener("change", () => {
    if (smallScreen.matches) paused = true;
    updatePlayback();
  });
  carousel
    .querySelector(".carousel-navigation")
    ?.addEventListener("keydown", (event) => {
      if (!(event instanceof KeyboardEvent)) return;
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        void showSlide(
          (index + (event.key === "ArrowRight" ? 1 : -1) + slides.length) %
            slides.length,
          true,
        );
      }
    });
  let touchStart: { x: number; y: number } | undefined;
  carousel.addEventListener("pointerdown", (event) => {
    if (
      event.pointerType === "touch" &&
      event.target instanceof Element &&
      !event.target.closest("button,a")
    )
      touchStart = { x: event.clientX, y: event.clientY };
  });
  carousel.addEventListener("pointerup", (event) => {
    if (!touchStart) return;
    const x = event.clientX - touchStart.x;
    const y = event.clientY - touchStart.y;
    touchStart = undefined;
    if (Math.abs(x) > 55 && Math.abs(x) > Math.abs(y) * 1.4)
      void showSlide(
        (index + (x < 0 ? 1 : -1) + slides.length) % slides.length,
        true,
      );
  });
  carousel.addEventListener("pointercancel", () => {
    touchStart = undefined;
  });
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? false;
        updatePlayback();
      },
      { threshold: 0.15 },
    );
    observer.observe(carousel);
  }
  updatePlayback();
}
