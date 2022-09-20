export function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
        "Appointments",
        [
            {
                id: 1,
                date: "01-01-2023",
                time: "4:00PM",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 2,
                date: "01-01-2023",
                time: "4:30PM",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 3,
                date: "01-02-2023",
                time: "9:00AM",
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ],
        {}
    );
}
export function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Appointments", null, {});
}