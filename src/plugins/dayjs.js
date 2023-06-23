import dayjs from 'dayjs'
import Duration from 'dayjs/plugin/duration'
import RelativeTime from 'dayjs/plugin/relativeTime'
import WeekYear from 'dayjs/plugin/weekYear'
import QuarterOfYear from 'dayjs/plugin/quarterOfYear'
import CustomParseFormat from 'dayjs/plugin/customParseFormat'
import ObjectSupport from 'dayjs/plugin/objectSupport'
import ArraySupport from 'dayjs/plugin/arraySupport'
import IsToday from 'dayjs/plugin/isToday'
import UTC from 'dayjs/plugin/utc'
import Timezone from 'dayjs/plugin/timezone'
import 'dayjs/locale/en'

dayjs.extend(WeekYear)
dayjs.extend(Duration)
dayjs.extend(RelativeTime)
dayjs.extend(QuarterOfYear)
dayjs.extend(CustomParseFormat)
dayjs.extend(ObjectSupport)
dayjs.extend(ArraySupport)
dayjs.extend(IsToday)
dayjs.extend(UTC)
dayjs.extend(Timezone)
dayjs.locale('en')

export default dayjs
