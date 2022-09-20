export function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
        "Patients",
        [
            {
                id: 1,
                email: 'tyewnw234@test.com',
                first: 'Timothy',
                last: "Grey",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 2,
                email: 'alkdjf23423@test.com',
                first: 'Ella',
                last: "Magenta",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 3,
                email: 'asfdklfj2323@test.com',
                first: 'Cory',
                last: "Orange",
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ],
        {}
    );
}
export function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Patients", null, {});
}