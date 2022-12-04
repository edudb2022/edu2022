// import ReactGA from "react-ga"
// ReactGA.initialize(`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`)
const trackingEvent = {
  pageView: (url: string) => {
    window.gtag(
      "config",
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string,
      { page_path: url }
    )
  },

  // pageTypeView: (eventCategory: string, eventlabel: string, value: number) => {
  //   window.gtag("event", "pageVi122323232323232323123ew", {
  //     event_category: eventCategory,
  //     event_label: eventlabel,
  //     value: value
  //   })
  // },
  customEvent: (
    action: string,
    event_category?: string,
    event_label?: string,
    value?: number
  ) => {
    window.gtag("event", action, {
      event_category: event_category,
      event_label: event_label,
      value: value
    })
  }
}

export default trackingEvent
