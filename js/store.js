import { reactive } from 'vue'
import axios from 'axios';


export const store = reactive({
    apiUrl: 'http://127.0.0.1:8000/api/projects',
    storeProjectList: [],
    project: [],
    searchedProject: '',
    projectListFiltered: [],

    searchProject(searchedProject) {
        console.log(searchedProject)
        axios.get(this.apiUrl)
            .then((response) => {
                this.storeProjectList = response.data.results;
                console.log(this.storeProjectList)
                this.projectListFiltered = this.storeProjectList.filter(element => element.title === searchedProject)
                console.log(this.projectListFiltered)

            })
            .catch(function (error) {
                console.log(error);
            });
    }
})