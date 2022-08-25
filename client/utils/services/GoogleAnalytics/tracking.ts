const trackingEvent = {
  pageView: (url: string) => {
    window.gtag(
      "config",
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string,
      { page_path: url }
    )
  },

  pageTypeView: (eventCategory: string, eventlabel: string, value: number) => {
    window.gtag("event", "pageVi122323232323232323123ew", {
      event_category: eventCategory,
      event_label: eventlabel,
      value: value
    })
  }
}

export default trackingEvent
