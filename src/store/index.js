import {createStore} from 'vuex'
import {reactive} from "vue";
import actions from "./actions/index.js";
import mutations from "./mutations.js";

export const state = reactive({
    assets: {
        '1': {
            id: '1',
            dataType: 'Course',
            title: "Semiconductor Physics, Transport, and Spintronics",
            area: "Spain",
            organisation: "Universitat Autònoma de Barcelona",
            ECTS: 2,
            inPerson: true,
            schedule: "3 lectures per week",
            homework: "4 hours of homework",
            examType: "Written take-home exam",
        },
        '2': {
            id: '2',
            dataType: 'Course',
            title: "Quantum Programming",
            area: "Praque",
            organisation: "Czech Republic Technical University",
            ECTS: 2,
            inPerson: true,
            schedule: "3 lectures per week",
            homework: "4 hours of homework",
            examType: "Written take-home exam",
        },
        '3': {
            id: '3',
            dataType: 'Course',
            title: "Quantum Liquids",
            area: "Pisa",
            organisation: "University of Pisa",
            ECTS: 2,
            inPerson: true,
            schedule: "3 lectures per week",
            homework: "4 hours of homework",
            examType: "Written take-home exam",
        }
    },
    status: {},
    acknowledgedErrors: {},
    documentFilter: null,
    queryStates: {},
    UI: {},
    appId: 'eqrc'
});
export default createStore({
    state,
    mutations,
    actions,
})
