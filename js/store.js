import { reactive } from 'vue'
import axios from 'axios';


export const store = reactive({
    apiUrl: 'http://127.0.0.1:8000/api/projects',
    storeProjectList: [],
    project: [],
    searchedProject: '',
    // projectListFiltered: [],
    projectListMap: [],

    searchProject(searchedProject) {
        console.log(searchedProject)
        axios.get(this.apiUrl)
            .then((response) => {
                this.storeProjectList = response.data.results;
                console.log(this.storeProjectList)
                let projectListFiltered = this.storeProjectList.filter(element => element.title.toLowerCase().includes(searchedProject.trim().toLowerCase()))
                this.projectListMap = projectListFiltered.map(element => {
                    return element.id
                })
                console.log(this.projectListMap)
                this.apiUrl = `${this.apiUrl}/${this.projectListMap}`


            })
            .catch(function (error) {
                console.log(error);
            });
    }
})