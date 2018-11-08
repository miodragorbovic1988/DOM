function Exem(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;
}

Exem.prototype.getExamInfo = function () {
    return this.subject.getSubjectName() + this.student.getStudentData();
}

Exem.prototype.hasPassed = function () {
    if (this.grade > 5) {
        return true;
    }
    return false;
}

