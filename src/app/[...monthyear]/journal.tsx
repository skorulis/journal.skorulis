
import { JournalDay, JournalMonth } from '../model/JournalModel';
import { promises as fs } from 'fs';

export async function Journal(params: {filename: string}) {
    //const data = await getData(params.filename)
    const file = await fs.readFile(process.cwd() + "/public/june2024.json", 'utf8')
    const data = JSON.parse(file);
    
    return <div>
        {JournalMonthContent(data)}
    </div>
}

function JournalMonthContent(month: JournalMonth) {

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

    return <div>
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

async function getData(path: string): Promise<JournalMonth> {
    const res = await fetch(
        `https://pub-02a71505f3f24f5db7e61eab54a48a69.r2.dev/${path}.json`,
        { cache: 'no-store' }
    );
    console.log(res)
    const data = await res.json()
    return data;
}