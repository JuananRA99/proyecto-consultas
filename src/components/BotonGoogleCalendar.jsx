import { useEffect } from 'react';

const GoogleCalendarButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    script.async = true;
    script.onload = () => {
      window.calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2n2x1yL3vpY2gifSqY3JHEwnaatkYqo5FbtacESM8TuMO1Ymom6k0lZGTUt2HeVoeeD-bM3vvD?gv=true',
        color: '#039BE5',
        label: 'Reservar consulta',
        target: document.getElementById('google-calendar-button')
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
      <div id="google-calendar-button"></div>
    </>
  );
};

export default GoogleCalendarButton;