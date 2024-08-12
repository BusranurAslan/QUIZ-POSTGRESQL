module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define('Question', {
      questionText: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });
  
    Question.associate = (models) => {
      Question.hasMany(models.Answer, {
        foreignKey: 'questionId',
        as: 'answers',
        onDelete: 'CASCADE',
      });
    };
  
    return Question;
  };
  