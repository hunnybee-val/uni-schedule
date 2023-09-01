# Uni Schedule (v 1.0.0)
**CLI tool for fast access to your school/university schedule**
## Highlights
- Create, edit & view class schedule for a chosen weekday
- Show today's and tomorrow's classes
## Usage
```
$uni-schedule --help                                                                                                     
Usage: uni-schedule [options] [command]

Options:
  -h, --help      display help for command

Commands:
  create          Create new schedule for a chosen weekday
  get             Get schedule for a chosen weekday
  today           Get today's schedule
  tomorrow        Get tomorrow's schedule
  help [command]  display help for command
```
## Configuration
Schedule is stored in `commands/schedule.json`. You can manually edit it or just use a built-in command `create`:
```
uni-schedule create
                                                                               
? Выберите день недели:  (Use arrow keys)
❯ Понедельник
  Вторник
  Среда
  Четверг
  Пятница
  Суббота
```
## Modules
- [Inquirer](https://github.com/SBoudrias/Inquirer.js#inquirer)
- [cli-table](https://github.com/Automattic/cli-table#readme)
- [Chalk](https://github.com/chalk/chalk)
- [Commander](https://github.com/tj/commander.js)
- [path](https://github.com/jinder/path)
- [url](https://github.com/defunctzombie/node-url)
- [modify-json-file](https://github.com/zardoy/modify-json-file)
## TO-DO
- Add multilingual support
- Optimize module usage
- Add install instructions
- Add command to show full schedule
- Remove quotes from output
## Created by
Valeria Strygina (@hunnybee-val)
## Licence
[MIT](https://github.com/hunnybee-val/uni-schedule/blob/master/LICENSE)
