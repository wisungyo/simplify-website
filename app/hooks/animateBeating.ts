const animateBeating = (id: string, timeout = 600) => {
  const element = document.getElementById(id);

  if (element) {
    element.classList.add("animate-beat");

    setTimeout(() => {
      element.classList.remove("animate-beat");
    }, timeout);
  }
};

export default animateBeating;
