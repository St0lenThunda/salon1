const grpViews = document.querySelectorAll('[name=views]')

const calendar = new tui.Calendar( '#calendar', {
  usageStatistics: false,
  defaultView: 'week',
  template: {
    time ( event ) {
      const { start, end, title } = event;

      return `<span style="color: white;">${formatTime( start )}~${formatTime( end )} ${title}</span>`;
    },
    allday ( event ) {
      return `<span style="color: gray;">${event.title}</span>`;
    },
  },
  calendars: [
    {
      id: 'cal1',
      name: 'Personal',
      backgroundColor: '#03bd9e',
    },
    {
      id: 'cal2',
      name: 'Work',
      backgroundColor: '#00a9ff',
    },
  ],
} );

calendar.setTheme( {
  common: {
    gridSelection: {
      backgroundColor: 'rgba(81, 230, 92, 0.05)',
      border: '1px dotted #515ce6',
    },
  },
} );

// change calendar views by radio selection
grpViews.forEach( ( radio ) => {
  radio.addEventListener( 'change', ( event ) => {
    const selectedValue = event.target.id;
    console.log( `Selected value: ${selectedValue}` );
    calendar.changeView(selectedValue)
    // You can perform further actions based on the selected value
  } );
} );
