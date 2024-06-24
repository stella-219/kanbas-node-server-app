import model from "./model.js";

export const createCourse = async (course) => {
    try {
        console.log("Creating course with data:", course);
        delete course._id;
        const newCourse = await model.create(course);
        return newCourse;
    } catch (error) {
        console.error("Error in createCourse DAO method:", error);
        throw error;
    }
}
export const findAllCourses = () =>
    model.find();

export const updateCourse = (courseId, course) =>
    model.updateOne({ _id: courseId }, { $set: course });

export const deleteCourse = (courseId) =>
    model.deleteOne({ _id: courseId });

export const findCoursesByAuthor = (author) => {
    return model.find({ author });
}