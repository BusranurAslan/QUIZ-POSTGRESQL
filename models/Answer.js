module.exports = (sequelize, DataTypes) => {
    const Answer = sequelize.define('Answer', {
      answerText: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isCorrect: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    });
  
    Answer.associate = (models) => {
      Answer.belongsTo(models.Question, {
        foreignKey: 'questionId',
        as: 'question',
      });
    };
  
    return Answer;
  };
  