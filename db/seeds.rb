# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Course.create(name: 'Engenharia Mecânica')
Course.create(name: 'Engenharia Química')
Course.create(name: 'Engenharia de Alimentos')
Course.create(name: 'Engenharia Geológica')
Course.create(name: 'Bacharelado em Ciência e Tecnologia')

StatusCode.create(code: 1, description: 'ativo')
StatusCode.create(code: 2, description: 'inativo')


EventCode.create(code: '03-127', description: 'Falecimento, Art. 97, Lei nº (08 dias consecutivos)')
EventCode.create(code: '03-113', description: 'Licença para Tratamento da Própria Saúde, Art. 202, Lei n° 8.112/09')
EventCode.create(code: '03-114', description: 'Licença Gestante, Art. 207, Lei no 8.112/90(120 dias)')
EventCode.create(code: '03-123', description: 'Licença Paternidade, Art. 208, Lei no 8.112/90')
EventCode.create(code: '03-124', description: 'Doação Voluntária de Sangue, Art.97, Insiso I Lei n° 8.112/90 (01 dia)')
EventCode.create(code: '03-111', description: 'Afastamento para Estudos ou Missão no Exterior, Art. 95, Lei no 8.112/90')
EventCode.create(code: '03-143', description: 'Falta Justificada')
EventCode.create(code: '03-144', description: 'Férias')
EventCode.create(code: '03-145', description: 'Comparecimento a Congresso, Conferência ou Similares')
EventCode.create(code: '03-146', description: 'Falta por Greve')
EventCode.create(code: '03-150', description: 'Viagem à Serviço')

course = Course.where('name = ?','Engenharia Química').first
status = StatusCode.where('description = ?', 'ativo').first
Employee.create(siape: '2075068', name: 'Anamaria de Oliveira Cardoso', effective: true, course_id: course.id, status_code_id: status.id)

User.create(email: 'marcelo.pedras@ict.ufvjm.edu.br', password: '12345678', password_confirmation: '12345678', name: 'Marcelo Pedras', nickname: 'marcelo.pedras', roles: [:admin])
