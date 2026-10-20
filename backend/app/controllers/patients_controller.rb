class PatientsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @patients = Patient.all

    respond_to do |format|
      format.html
      format.json { render json: @patients }
    end
  end

  def show
    @patient = Patient.find(params[:id])

    respond_to do |format|
      format.html
      format.json { render json: @patient }
    end
  end

  def new
    @patient = Patient.new
  end

  def edit
    @patient = Patient.find(params[:id])
  end

  def create
    @patient = Patient.new(patient_params)

    respond_to do |format|
      if @patient.save
        format.html { redirect_to @patient, notice: "Patient created successfully." }
        format.json { render json: @patient, status: :created }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @patient.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @patient = Patient.find(params[:id])

    respond_to do |format|
      if @patient.update(patient_params)
        format.html { redirect_to @patient, notice: "Patient updated successfully." }
        format.json { render json: @patient }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @patient.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @patient = Patient.find(params[:id])
    @patient.destroy

    respond_to do |format|
      format.html { redirect_to patients_path, notice: "Patient deleted successfully." }
      format.json { render json: { message: "Patient deleted successfully" } }
    end
  end

  private

  def patient_params
    params.require(:patient).permit(:name, :address, :location)
  end
end
