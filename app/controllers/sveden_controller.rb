#encoding: UTF-8
class SvedenController < ApplicationController
  skip_before_filter :authenticate_user!
  
  def index
    redirect_to article_path(226)
  end
  
  def common
  end
  
  def struct
    @divisions = Division.order(:name).includes([:division_type]).where(in_structure: true).group_by{|d| t(d.division_type.name, scope: [:divisions])}.sort
  end
  
  def document
    redirect_to article_path(1144)
  end
  
  def education
    @educational_programs = EducationalProgram.includes(:educational_standart, :educational_program_numbers, :educational_program_priems, :educational_program_researches, {academic_plans: :attachment}, {academic_schedules: :attachment}, {practices: :attachment}, {subjects: [:annotation_attachment, :full_text_attachment]}, :accreditation, {methodological_supports: :attachment}, :attachment).order('level DESC').order([:code, :name]).where(active: true)
    @adaptive_educational_programs = @educational_programs.where(adaptive: true)
    @common_educational_programs = @educational_programs.where(adaptive: false)
  end
  
  def eduStandarts
    @educational_programs = EducationalProgram.includes(:educational_standart).order('level DESC').order([:code, :name]).where(active: true)
  end
  
  def employees
    @posts_head = Post.includes(:profile, :division).select{|p| p.name =~ /^ректор/}
    @posts_vice = Post.includes(:profile, :division).select{|p| p.name =~ /^проректор/}
    @employees_all = Profile.includes([:user, :degree, :academic_title]).joins(:divisions).where(divisions: {division_type_id: 3}).uniq
    @employees_educational_programs = Profile.includes([:user, :degree, :academic_title]).joins(:divisions, :educational_programs).where(divisions: {division_type_id: 3}).uniq
    @employees_not_educational_programs = @employees_all - @employees_educational_programs
    @posts_hash = {}
    Post.includes(:profile, :division).joins(:profile, :division).where(profiles: {id: @employees_all}).where(divisions: {division_type_id: 3}).group_by(&:user_id).each do |k, v|
      @posts_hash[k] = {}
      @posts_hash[k][:posts] = {}
      @posts_hash[k][:posts] = v.map{|p| [p.name, p.division.name].join(' ')}.each{|item| (item =~ /заведую/ ? item.gsub!('кафедра', '') : item.gsub!('кафедра', 'кафедры'))}.join(', ')
    end
    @educational_programs = EducationalProgram.where(active: true).order(:code)
    respond_to do |format|
      format.html
      format.xls if current_user_administrator?
    end
  end

  def objects
    @classrooms = Classroom.where(ovz: nil)
  end
  
  def grants
  end
  
  def paid_edu
    redirect_to article_path(1150)
  end
  
  def budget
    @financial_activities = FinancialActivity.order(:year)
  end
  
  def vacant
    @educational_programs = EducationalProgram.includes(:educational_program_vacants).order('level DESC').order([:code, :name])
  end
  
  def ovz
    @classrooms = Classroom.where.not(ovz: nil)
  end
  
  def inter
    @international_contracts = InternationalContract.all
  end
end
