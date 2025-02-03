document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var startDate = new Date('2025-08-22');
    var endDate = new Date('2024-09-06');
    function getInitialView() {
        if (window.innerWidth < 768) {
            return 'list';
        } else {
            return 'timeGrid8Day';
        }
    };

    function duringCourse() {
        var currentDate = new Date();
        if ((currentDate < startDate) || (currentDate > endDate)) {
            return false;
        } else {
            return true;
        }
    };
    var calendar = new FullCalendar.Calendar(calendarEl, {
        timeZone: 'America/New_York',
        initialView: getInitialView(),
        initialDate: startDate, //this should work but is broken
        contentHeight: 'auto',
        slotMinTime: '08:00:00',
        slotMaxTime: '23:00:00',
        firstDay: 3,
        headerToolbar: {
            left: 'today prev,next',
            center: 'title',
            right: 'timeGrid8Day,timeGridDay,list'
        },
        nowIndicator: true,
        googleCalendarApiKey: 'AIzaSyCFvUlXSihnRyPGbMdjRQmDtGUS5OoomLw', // TODO: Add API key
        events: {
            googleCalendarId: '7be92d4963c81b366f163c3dd90033f0cd52501a2c041500516a26d87707760e@group.calendar.google.com'
        },
        views: {
            timeGrid8Day: {
                type: 'timeGrid',
                duration: { days: 8 },
                buttonText: '8-day week'
            },
            list: {
                type: 'listWeek',
                duration: { days: 16 },
            }
        },
        eventDidMount: function (arg) {
            var event = arg.event;

            var eventTitle = event.title.toLowerCase();
            var eventType = '';

            // Determine event type based on title
            if (eventTitle.includes('lect.')) {
                eventType = 'lecture';
            } else if (eventTitle.includes('talk') || eventTitle.includes('tut')) {
                eventType = 'talk';
            } else if (eventTitle.includes('ex.') || (eventTitle.includes('project') && eventTitle.includes('work'))) {
                eventType = 'exercise';
            } else if (eventTitle.includes('lunch') || eventTitle.includes('dinner')) {
                eventType = 'meal';
            } else if (eventTitle.includes('party') || eventTitle.includes('day off')) {
                eventType = 'party';
            } else if (eventTitle.includes('phase')) {
                eventType = 'phase';
            } else {
                eventType = 'other';
            }

            event.setExtendedProp('type', eventType);
            if (arg.event.extendedProps.type == "phase") {
                arg.event.setProp('display', 'background');
            }

            var dotEl = arg.el.getElementsByClassName('fc-list-event-dot')[0];
            if (dotEl) {
                dotEl.classList.remove('fc-list-event-dot');
                dotEl.classList.add('newdot');
                dotEl.classList.add(eventType);
            }

            var tooltipExemptTypes = ['phase']; // Add types you want to exempt from tooltips
            if (!tooltipExemptTypes.includes(eventType)) {
                var tooltipContent = '<strong>' + event.title + '</strong><br>\n';
                tooltipContent += calendar.formatRange(
                    event.start,
                    event.end,
                    {
                        'hour': 'numeric',
                        'minute': '2-digit',
                        'meridiem': 'short'
                    });
                var location = event.extendedProps.location;
                if (location) {
                    tooltipContent += '\n<span class="location">' + location + '</span><br>';
                }

                var tooltip = new Tooltip(arg.el, {
                    title: tooltipContent,
                    placement: 'top',
                    trigger: 'hover',
                    container: 'body',
                    html: true,
                    template: '<div class="tooltip ' + eventType + '" role="tooltip"><div class="tooltip-inner"></div></div>'
                });
            }
            // Set box-shadow color dynamically
            return null;
        },
        eventClassNames: function (arg) {
            var event = arg.event;
            var eventType = event.extendedProps.type;
            let classNames = [];
            // Use eventType to determine the class name
            if (eventType) {
                classNames.push(eventType);
            }
            return classNames;

        },
        eventContent: function (arg) {
            let eventTitle = document.createElement('div');
            eventTitle.innerHTML = arg.event.title;
            eventTitle.classList.add('fc-event-title')

            let eventLocation = document.createElement('div');
            eventLocation.classList.add('fc-event-location')
            let location = arg.event.extendedProps.location;
            if (location) {
                let shortLocation = location.split(',')[0];
                eventLocation.innerHTML = shortLocation;
            }

            let arrayOfDomNodes = [eventTitle, eventLocation]

            return { domNodes: arrayOfDomNodes }
        }
    });
    if (duringCourse()) {
        calendar.today();
    }
    calendar.render();
});