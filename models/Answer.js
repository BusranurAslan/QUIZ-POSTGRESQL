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
    questionId: {  
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Questions', 
        key: 'id'
      },
    }
  });

  Answer.associate = (models) => {
    Answer.belongsTo(models.Question, {
      foreignKey: 'questionId',
      as: 'questions',
    });
  };

  return Answer;
};
