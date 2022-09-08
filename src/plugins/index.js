import { Swipe, SwipeItem, Button, Notify } from "vant";
let plugins = [Swipe, SwipeItem, Button, Notify];
export default function getVant(app) {
  plugins.forEach((item) => {
    return app.use(item);
  });
}
