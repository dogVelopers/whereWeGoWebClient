export function pageview(url: string) {
  window.gtag('config', process.env.NEXT_PUBLIC_GA_ID as string, {
    page_path: url,
  });
}

interface IGAEvent {
  action: string;
  params: {
    [key: string]: any;
  };
}

export function event({ action, params }: IGAEvent) {
  window.gtag('event', action, params);
}
