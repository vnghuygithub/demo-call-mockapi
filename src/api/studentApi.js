import axiosClient from "./axiosClient";

const studentApi = {
    getAll(params) {
        const url = "/students";
        return axiosClient.get(url, {params})
    },

    // get(id) {
    //     const url = "/students";
    //     return axiosClient.get(url, {params})
    // },

    // add(data) {

    // },

    // update(data) {

    // },

    // remove (id) {

    // }
};

export default studentApi