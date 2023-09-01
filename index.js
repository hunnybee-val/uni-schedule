#! /usr/bin/env node

import { createSchedule } from "./commands/create-schedule.js";
import {
  getScheduleByDay,
  getTodaySchedule,
  getTomorrowSchedule,
} from "./commands/get-schedule.js";
import { program } from "commander";

program
  .command("create")
  .description("Create new schedule for a chosen weekday")
  .action(createSchedule);

program
  .command("get")
  .description("Get schedule for a chosen weekday")
  .action(getScheduleByDay);

program
  .command("today")
  .description("Get today's schedule")
  .action(getTodaySchedule);

program
  .command("tomorrow")
  .description("Get tomorrow's schedule")
  .action(getTomorrowSchedule);

program.parse();
