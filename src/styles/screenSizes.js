// xs devices
// @media (max-width: 575.98px)
// small devices(landscape phones less than 768)
// @media (max-width: 767.98px)
// Medium Devices (tablets, less than 992)
// @media (max-width: 991.98px)
// Large devices (desktops, less than 1200px)
// @media (max-width: 1199.98px)

export default {
  up(size) {
    const sizes = {
      xs: "450",
      sm: "768",
      md: "992",
      lg: "1200"
    };
    return `@media (min-width: ${sizes[size]})`;
  },
  down(size) {
    const sizes = {
      xs: "575.98px",
      sm: "767.98px",
      md: "991.98px",
      lg: "1199.98px"
    };
    return `@media (max-width: ${sizes[size]})`;
  }
};
