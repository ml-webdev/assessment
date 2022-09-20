export function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
        "Doctors",
        [
            {
                id: 1,
                email: 'jsadfs234@test.com',
                first: 'Stacy',
                last: "Brown",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 2,
                email: 'edcvs234@test.com',
                first: 'James',
                last: "Gold",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 3,
                email: 'yronwo6482@test.com',
                first: 'Darren',
                last: "Green",
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ],
        {}
    );
}
export function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Doctors", null, {});
}