import { StyleSheet } from 'react-native';
const TEXT_COLOR = '#fff',
    BG_COLOR = '#303b3d',
    SECTION_HEADER_COLOR = '#3b494b',
    SECTION_ITEM_COLOR = '#ff9f02';

export default StyleSheet.create({
    sectionHeaderView: {
        backgroundColor: SECTION_HEADER_COLOR,
        paddingLeft: 10,
        borderTopColor: SECTION_HEADER_COLOR,
        borderTopWidth: 1,
    },
    sectionHeaderText: {
        color: TEXT_COLOR,
        fontWeight: '700',
        fontSize: 16
    },

    sectionItemText: {
        color: SECTION_ITEM_COLOR,
        fontSize: 10
    },
    AlphabetListViewBg: {
        backgroundColor: BG_COLOR,
    },
    cellText: {
        color: TEXT_COLOR,
        fontSize: 12,

    },
    cellView: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        borderTopColor: SECTION_HEADER_COLOR,
        borderTopWidth: 1,
        height: 30
    },
    SectionHeader: {
        borderTopColor: SECTION_HEADER_COLOR,
        borderTopWidth: 1,
    }
});