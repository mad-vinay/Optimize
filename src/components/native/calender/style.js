/**
 * Calender styles
 * Consist of custom styles for the react-native-calendar component.
 **/

const CALENDAR_BG         = '#303b3d',
    CURRENT_DAY_BG = '#ff9f02',
    TEXT_COLOR          = '#fff';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    calendarContainer: {
        backgroundColor: CALENDAR_BG,
    },
    currentDayCircle: {
        backgroundColor: CURRENT_DAY_BG,
    },
    day: {
        color: TEXT_COLOR,
    },
    currentDayText: {
        color: CALENDAR_BG
    },
    title: {
        color: TEXT_COLOR,
    },
    controlButtonText: {
        color: TEXT_COLOR,
    },
    calendarHeading: {
        borderTopColor: CURRENT_DAY_BG,
        borderWidth: 1,
    },
    weekRow: {
        borderTopColor: CURRENT_DAY_BG,
        borderBottomColor: CURRENT_DAY_BG,
        borderWidth: 1,
    },
});
