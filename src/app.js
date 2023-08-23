import { scheduleJob } from "node-schedule";
import { robot } from "./robot.js";

export const job = scheduleJob("* */60 * * * *", async () => {
  robot();
});
