#! /usr/bin/env node

import { input } from "@inquirer/prompts";
import select, { Separator } from "@inquirer/select";
import path from "path";
import { fileURLToPath } from "url";
import { modifyJsonFile } from "modify-json-file";

export async function createSchedule() {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);

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

  let subjects = [];
  let teachers = [];
  let rooms = [];

  for (let i = 0; i < 7; i++) {
    const subject = await input({ message: `${i + 1} предмет: ` });
    const teacher = await input({ message: "Преподаватель: " });
    const room = await input({ message: "Аудитория: " });
    subjects.push(subject);
    teachers.push(teacher);
    rooms.push(room);
  }

  await modifyJsonFile(path.join(__dirname, "schedule.json"), {
    [weekday]: {
      "8:30-10:00": {
        name: `${subjects[0]}`,
        teacher: `${teachers[0]}`,
        room: `${rooms[0]}`,
      },
      "10:10-11:40": {
        name: `${subjects[1]}`,
        teacher: `${teachers[1]}`,
        room: `${rooms[1]}`,
      },
      "12:10-13:40": {
        name: `${subjects[2]}`,
        teacher: `${teachers[2]}`,
        room: `${rooms[2]}`,
      },
      "13:50-15:20": {
        name: `${subjects[3]}`,
        teacher: `${teachers[3]}`,
        room: `${rooms[3]}`,
      },
      "15:50-17:20": {
        name: `${subjects[4]}`,
        teacher: `${teachers[4]}`,
        room: `${rooms[4]}`,
      },
      "17:30-19:00": {
        name: `${subjects[5]}`,
        teacher: `${teachers[5]}`,
        room: `${rooms[5]}`,
      },
      "19:10-20:40": {
        name: `${subjects[6]}`,
        teacher: `${teachers[6]}`,
        room: `${rooms[6]}`,
      },
    },
  });
}
