
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    questionText: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    quizId: {  
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true
    }
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
