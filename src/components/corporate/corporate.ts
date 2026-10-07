import { initMeshFlow } from "./mesh-flow";

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
  });
});

const form = document.querySelector<HTMLFormElement>(".contact-form");
const sendButton = form?.querySelector<HTMLButtonElement>("button[type=submit]");
if (sendButton) sendButton.disabled = false;
let submitting = false;
form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (submitting || !sendButton) return;
  form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea").forEach(field => {
    field.value = field.value.trim();
  });
  if (!form.reportValidity()) return;
  const status = form.querySelector<HTMLElement>(".form-status");
  const label = sendButton.querySelector("[data-submit-label]");
  const data = new FormData(form);
  const body = new URLSearchParams();
  body.set("name", String(data.get("name") ?? "").trim());
  body.set("email", String(data.get("email") ?? "").trim());
  body.set("details", `${form.dataset.companyLabel}: ${String(data.get("company") ?? "").trim()}\n\n${String(data.get("message") ?? "").trim()}`);
  submitting = true;
  sendButton.disabled = true;
  form.setAttribute("aria-busy", "true");
  if (label) label.textContent = form.dataset.sendingLabel ?? "";
  if (status) status.textContent = "";
  try {
    // Same webhook and payload as the deployed site. Its no-cors response is opaque:
    // completion confirms the network request, not the downstream email delivery.
    const response = await fetch("https://n8n.tahona.ai/webhook/tahona-form", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    if (response.type !== "opaque" && !response.ok) throw new Error("Contact request failed");
    if (status) {
      status.dataset.state = "success";
      status.textContent = form.dataset.successMessage ?? "";
    }
    form.reset();
  } catch {
    if (status) {
      status.dataset.state = "error";
      status.textContent = form.dataset.errorMessage ?? "";
    }
  } finally {
    submitting = false;
    sendButton.disabled = false;
    form.removeAttribute("aria-busy");
    if (label) label.textContent = form.dataset.sendLabel ?? "";
  }
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
  let index = 0;
  let paused = false;
  let hovered = false;
  let focused = false;
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
      !hovered &&
      !focused &&
      visible &&
      !document.hidden &&
      !reducedMotion.matches;
    carousel!.dataset.playing = String(playing);
    carousel!.dataset.activeSlide = String(index + 1);
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
      paused = false;
      startedAt = undefined;
      remainingMs = 9000;
    }
    if (next === index) {
      if (manual) indicators[index]?.querySelector("span")?.getAnimations().forEach(animation => { animation.currentTime = 0; });
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
    const caption = carousel!.querySelector("[data-carousel-caption]");
    const status = carousel!.querySelector("[data-carousel-status]");
    if (caption) caption.textContent = active?.dataset.slideCaption ?? "";
    if (manual && status)
      status.textContent = active?.getAttribute("aria-label") ?? "";
    updatePlayback();
  }

  indicators.forEach((button, i) =>
    button.addEventListener("click", () => void showSlide(i, true)),
  );
  // Hovering the indicators pauses the timer; the photo itself stays automatic.
  const navigation = carousel.querySelector<HTMLElement>(".carousel-navigation");
  navigation?.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "mouse") {
      hovered = true;
      updatePlayback();
    }
  });
  navigation?.addEventListener("pointerleave", () => {
    hovered = false;
    updatePlayback();
  });
  carousel.addEventListener("focusin", () => {
    focused = carousel.matches(":has(:focus-visible)");
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
  reducedMotion.addEventListener("change", updatePlayback);
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

if (carousel) initMeshFlow(carousel, reducedMotion);
