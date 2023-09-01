#! /usr/bin/env node

import { readFileSync } from "fs";
import select from "@inquirer/select";
import Table from "cli-table";
import chalk from "chalk";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const schedule = JSON.parse(readFileSync(`${__dirname}/schedule.json`));

function getSchedule(weekday) {
  const periods = [
    "8:30-10:00",
    "10:10-11:40",
    "12:10-13:40",
    "13:50-15:20",
    "15:50-17:20",
    "17:30-19:00",
    "19:10-20:40",
  ];
  let table = new Table({
    head: [
      `${chalk.bold.green(weekday)}`,
      `${chalk.bold.magenta("Предмет")}`,
      `${chalk.bold.magenta("Преподаватель")}`,
      `${chalk.bold.magenta("Аудитория")}`,
    ],
  });

  periods.forEach((period) => {
    table.push([
      `${chalk.blue(period)}`,
      `${JSON.stringify(schedule[weekday][period]["name"])}`,
      `${JSON.stringify(schedule[weekday][period]["teacher"])}`,
      `${JSON.stringify(schedule[weekday][period]["room"])}`,
    ]);
  });

  console.log(table.toString());
}

export async function getScheduleByDay() {
  const weekday = await select({
    message: "Выберите день недели: ",
    choices: [
      {
        name: "Понедельник",
        value: "monday",
      },
      {
        name: "Вторник",
        value: "tuesday",
      },
      {
        name: "Среда",
        value: "wednesday",
      },
      {
        name: "Четверг",
        value: "thursday",
      },
      {
        name: "Пятница",
        value: "friday",
      },
      {
        name: "Суббота",
        value: "saturday",
      },
    ],
  });
  getSchedule(weekday);
}

export function getTodaySchedule() {
  const weekdays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  let date = new Date();
  if (date.getDay() === 0) {
    console.log("В воскресенье никто не учится.");
  } else {
    getSchedule(weekdays[date.getDay()]);
  }
}
export function getTomorrowSchedule() {
  const weekdays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  let date = new Date();
  if (date.getDay() === 0) {
    console.log("В воскресенье никто не учится.");
  } else {
    getSchedule(weekdays[(date.getDay() + 1) % 7]);
  }
}
