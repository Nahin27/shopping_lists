const redirectTo = (path) => {
    return new Response("", {
      status: 303,
      headers: {
        "Location": path,
      },
    });
  };

export { redirectTo };