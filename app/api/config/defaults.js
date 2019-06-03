export default {
  windowSize: {
    type: "object",
    properties: {
      width: {
        type: "integer",
        // minimum: 400,
        default: 900,
      },
      height: {
        type: "integer",
        // minimum: 400,
        default: 600,
      },
      x: {
        type: ["integer", "null"],
        default: null,
      },
      y: {
        type: ["integer", "null"],
        default: null,
      },
    },
  },
}
