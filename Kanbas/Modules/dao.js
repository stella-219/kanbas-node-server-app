import ModuleModel from "./model.js";

export const createModule = (module) => ModuleModel.create(module);
export const findAllModules = () => ModuleModel.find().populate("course");
export const findModuleById = (moduleId) => ModuleModel.findById(moduleId).populate("course");
export const updateModule = (moduleId, module) => ModuleModel.updateOne({ _id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => ModuleModel.deleteOne({ _id: moduleId });
export const findModulesByCourseId = (courseId) => ModuleModel.find({ course: courseId }).populate("course");
