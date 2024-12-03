"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("gen_random_uuid()"),
        allowNull: false,
        primaryKey: true,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      user_name: {
        type: Sequelize.STRING,
      },
      date_of_birth: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
      },
      user_type: {
        type: Sequelize.ENUM("job_seeker", "employer"),
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING,
      },
      phone_no: {
        type: Sequelize.STRING,
      },
      picture: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      google_id: {
        type: Sequelize.STRING,
      },
      apple_id: {
        type: Sequelize.STRING,
      },
      remember_token: {
        type: Sequelize.STRING,
      },
      otp: {
        type: Sequelize.STRING,
      },
      secret_key: {
        type: Sequelize.STRING,
      },
      is_mfa_enabled: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        field: "is_mfa_enabled",
      },
      is_verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      is_face_verified: {
        type: Sequelize.INTEGER,
        defaultValue: -1,
        allowNull: true,
      },
      imageUrl: {
        type: Sequelize.STRING,
      },
      verification_failing_reason: {
        type: Sequelize.STRING,
        field: "verification_failing_reason",
      },
      units: {
        type: Sequelize.ENUM('Imperial', 'Metric'),
        allowNull: false,
        defaultValue: 'Metric',
      },
      zipCode: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      latitude: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      longitude: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      deletedAt: {
        type: Sequelize.DATE,
        defaultValue: null,
        field: "deleted_at",
      },
      deactivateAt: {
        type: Sequelize.DATE,
        defaultValue: null,
        field: "deactivate_at",
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
