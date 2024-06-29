"use client";
import React, { useState, useEffect } from 'react';
import { JournalDay, JournalMonth } from './model/JournalModel';

export default function JournalContent() {

    const dataURL = "https://pub-02a71505f3f24f5db7e61eab54a48a69.r2.dev/"

    const [data, setData] = useState<JournalMonth|undefined>(undefined);

    useEffect(() => {
        let url = dataURL + "2024/june.json"
        // If you're using Create React App and the file is in the public folder
        fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => setData(data))
          .catch(error => console.error('There has been a problem with your fetch operation:', error));
      }, []);

    return <div>
        {data && JournalMonthContent(data) }
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