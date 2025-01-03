import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  const events = [
    { title: "LinkedIn Post - ENTNT", date: "2024-12-20" },
    { title: "Webinar - GOOGLE", date: "2024-12-24" },
    { title: "Conference Call - MICROSOFT", date: "2024-12-19" },
    { title: "NewLetter - AMAZON", date: "2024-12-28" },
  ];

  return (
    <div>
      <h1 className="font-bold mb-4 text-3xl text-center">Calendar View</h1>
      <div className="bg-white shadow-md rounded p-6 max-w-full overflow-x-auto">
        <FullCalendar
          data-testid="calendar" // Add the test ID here
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          events={events}
          headerToolbar={{
            start: "prev,next today",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          height="auto"
        />
      </div>
    </div>
  );
};

export default Calendar;
