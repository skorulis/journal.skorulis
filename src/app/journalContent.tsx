"use client";
import React, { useState, useEffect } from 'react';
import { JournalDay, JournalMonth } from './model/JournalModel';

export default function JournalContent() {

    const [data, setData] = useState<JournalMonth|undefined>(undefined);

    useEffect(() => {
        // If you're using Create React App and the file is in the public folder
        fetch('june2024.json')
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
        return date.toLocaleDateString('en-AU')
    }

    return <div>
        <h2>{formattedDate()}</h2>
        {
            day.entries.map( (entry) =>
                <p>{entry.text}</p>
            )
        }
    </div>
}