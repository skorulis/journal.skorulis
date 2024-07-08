
import { JournalDay, JournalMonth } from '../model/JournalModel';

export default function Journal(month: JournalMonth) {

    return <div>
        <h1>{month.title}</h1>
        {
            month.days.map( (day) =>
                JournalDayContent(day)
            )
        }
    </div>
}

function JournalDayContent(day: JournalDay) {
    
    function formattedDate() {
        let date = new Date(day.date)
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            day: 'numeric',
            
          };
        let formatted = date.toLocaleDateString('en-AU', options)
        let lastChar = formatted[formatted.length - 1]
        let ordinal = ""
        switch (lastChar) {
            case '1': ordinal = "st"; break;
            case '2': ordinal = "nd"; break;
            case '3': ordinal = "rd"; break;
            default: ordinal = "th"; break;
        }
        return formatted + ordinal
    }

    return <div key={day.date}>
        <h2>{formattedDate()}</h2>
        <ul>
        {
            day.entries.map( (entry) =>
                <li dangerouslySetInnerHTML={{__html: entry.text}} />
            )
        }
        </ul>
        
    </div>
}
