// events.js
const eventsData = [
    { 
        title: "Business Networking Breakfast",
        date: "2025-10-15",
        time: "08:30",
        location: "Cochabamba Convention Center" 
    },
    { 
        title: "Export Workshop: New Markets", 
        date: "2025-10-22", 
        time: "14:00", 
        location: "Chamber Hall A" 
    },
    { 
        title: "Sustainability in Business", 
        date: "2025-11-05", 
        time: "09:00", 
        location: "Online - Zoom" 
    }
  ];
  
  const eventsList = document.getElementById('events-list');
  
  function renderEvents(list){
    if(!eventsList) return;
    if(!list.length) {
      eventsList.innerHTML = `<p>No upcoming events</p>`;
      return;
    }
    eventsList.innerHTML = '';
    list.forEach(ev => {
      const div = document.createElement('div');
      div.className = 'event-item';
      div.innerHTML = `<time>${ev.date} ${ev.time}</time>
        <strong>${ev.title}</strong>
        <div>${ev.location}</div>`;
      eventsList.appendChild(div);
    });
  }
  
  renderEvents(eventsData);
  