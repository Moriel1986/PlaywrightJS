import { AddSectionFormFields } from "../components/Adoptions/AddSectionForm";



export const createNewAddSectionFields = (): AddSectionFormFields => {
  
    return ({
      division: "Buisness",
      department: "Economics",
      courseName: "Econ",
      courseNum: "101",
      section: "4",
      instructorName: "Test Instructor",
      instructorEmail: "test.instructor@redshelf.com",
      submitterName: "Test Submitter",
      submitterEmail: "test.submitter@redshelf.com",
      reviewerName: "Test Reviewer",
      reviewerEmail: "test.reviewer@redshelf.com",
      crn: "3003"

    })

};